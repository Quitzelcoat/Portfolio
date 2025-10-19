import { useRef, useState } from 'react';
import styles from './CommandCard.module.css';

type Props = {
  initialText?: string; // existing single-line string (keeps working)
  initialLines?: string[]; // new: preferred, array of lines
};

const tokenize = (text: string) => {
  // same tokenizer you had
  const tokens = text.split(' ').map((t) => {
    if (/^(-{1,2}|--)/.test(t)) return { text: t, type: 'flag' };
    if (/=/.test(t)) return { text: t, type: 'kv' };
    if (t.startsWith("'") && t.endsWith("'"))
      return { text: t, type: 'string' };
    if (t.startsWith('"') && t.endsWith('"'))
      return { text: t, type: 'string' };
    if (/[/.]/.test(t)) return { text: t, type: 'path' };
    return { text: t, type: 'normal' };
  });

  if (tokens.length > 0) tokens[0].type = 'command';
  return tokens;
};

const CommandCard: React.FC<Props> = ({
  initialText = 'npx create-portfolio --template minimal',
  initialLines,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);

  // Build lines array: priority to initialLines, otherwise split initialText by \n
  const lines: string[] =
    initialLines && initialLines.length > 0
      ? initialLines
      : (initialText || '').split('\n').filter((l) => l !== '');

  const tokenLines = lines.map((l) => tokenize(l));

  const handleCopy = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const text = lines.join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch {
        // give up silently
      } finally {
        document.body.removeChild(ta);
      }
    }
  };

  return (
    <div
      className={styles.card}
      role="group"
      aria-label="Interactive command example"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleCopy();
        }
      }}
    >
      <div className={styles.header} aria-hidden="true">
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
      </div>

      <div
        ref={contentRef}
        className={styles.content}
        // keep raw command(s) on data attribute for copy/read
        data-raw={lines.join('\n')}
        contentEditable={false}
        suppressContentEditableWarning
        aria-readonly="true"
      >
        {tokenLines.map((tokens, lineIndex) => (
          <div className={styles.line} key={lineIndex}>
            {/* show a prompt for each line (looks like multiple terminal lines) */}
            <span className={styles.prompt}>➜</span>

            <span className={styles.commandLine}>
              {tokens.map((tok, i) => (
                <span
                  key={i}
                  className={
                    tok.type === 'command'
                      ? styles.tCommand
                      : tok.type === 'flag'
                      ? styles.tFlag
                      : tok.type === 'path'
                      ? styles.tPath
                      : tok.type === 'kv'
                      ? styles.tKV
                      : tok.type === 'string'
                      ? styles.tString
                      : styles.tNormal
                  }
                >
                  {tok.text}
                  {i < tokens.length - 1 ? ' ' : ''}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <button
          className={styles.copyBtn}
          onClick={(e) => {
            handleCopy(e);
          }}
          aria-label="Copy command"
        >
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default CommandCard;
