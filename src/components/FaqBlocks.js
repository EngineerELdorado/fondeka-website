export function FaqInline({ text }) {
  const parts = text.split(/(\[[^\]]+\]\((?:https?:\/\/|mailto:|#|\/)[^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}><FaqInline text={part.slice(2, -2)} /></strong>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={index} className="faq-inline-code">{part.slice(1, -1)}</code>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} className="faq-inline-link"><FaqInline text={link[1]} /></a>;
    return part;
  });
}

export default function FaqBlocks({ blocks, tableLabel }) {
  return <div className="faq-blocks">
    {blocks.map((block, index) => {
      if (block.type === 'table') return (
        <div key={index} className="faq-table-region" role="region" aria-label={tableLabel} tabIndex={0}>
          <table data-wide={block.headers.length > 3}>
            <thead><tr>{block.headers.map((header, cell) => <th key={cell} scope="col" style={{ textAlign: block.align[cell] }}><FaqInline text={header} /></th>)}</tr></thead>
            <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex} style={{ textAlign: block.align[cellIndex], whiteSpace: ['Fee', 'Frais'].includes(block.headers[cellIndex]) ? 'nowrap' : undefined }}><FaqInline text={cell} /></td>)}</tr>)}</tbody>
          </table>
        </div>
      );
      if (block.type === 'list') {
        const Tag = block.ordered ? 'ol' : 'ul';
        return <Tag key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}><FaqInline text={item} /></li>)}</Tag>;
      }
      return <p key={index}><FaqInline text={block.text} /></p>;
    })}
  </div>;
}
