import type { TripData, TripConfig } from '../../types';

interface Props {
  data: TripData;
  config: TripConfig;
  updateData: (fn: (prev: TripData) => TripData) => void;
}

export function Checklist({ data, config, updateData }: Props) {
  const totalAll = config.checklistGroups.reduce((a, g) => a + g.items.length, 0);
  const doneAll  = config.checklistGroups.reduce((a, g) =>
    a + g.items.filter(i => data.checklist[i.id]).length, 0);
  const pctAll   = totalAll > 0 ? Math.round(doneAll / totalAll * 100) : 0;

  function toggle(itemId: string, checked: boolean) {
    updateData(prev => ({
      ...prev,
      checklist: { ...prev.checklist, [itemId]: checked }
    }));
  }

  return (
    <div>
      <div className="section-hdr">
        <div className="section-title">✅ Checklist da Viagem</div>
        <div style={{ color: 'var(--gray-500)', fontSize: '0.82rem' }}>
          {doneAll} de {totalAll} itens ({pctAll}%)
        </div>
      </div>

      {config.checklistGroups.map(group => {
        const done  = group.items.filter(i => data.checklist[i.id]).length;
        const total = group.items.length;

        return (
          <div className="check-group" key={group.id}>
            <div className="check-grp-hdr">
              <span>{group.title}</span>
              <span className="check-grp-prog">{done} / {total}</span>
            </div>
            {group.items.map(item => {
              const checked = !!data.checklist[item.id];
              return (
                <div className={`check-item ${checked ? 'done' : ''}`} key={item.id}>
                  <input
                    type="checkbox"
                    id={`chk-${item.id}`}
                    checked={checked}
                    onChange={e => toggle(item.id, e.target.checked)}
                  />
                  <label htmlFor={`chk-${item.id}`}>{item.txt}</label>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
