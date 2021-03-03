import React, { ReactElement } from 'react'
import IFilter from '../interfaces/IFilter'

interface IFiltersProps<T> {
  object: T;
  properties: Array<IFilter<T>>;
  onChangeFilter: (property: IFilter<T>) => void;
}

export default function Filters<T>(props: IFiltersProps<T>): ReactElement {

  const { object, properties, onChangeFilter } = props

  return (
    <div className="p-1 my-2">
      <label className="mt-3">Try us too</label>
      <br />
      {Object.keys(object).map(key => {
        return (
          <>
            <input
              type="checkbox"
              id={`${key}-true`}
              value={key}
              onChange={() => onChangeFilter({ property: key as any, isTruthySelected: true })}
              checked={properties.some(property => property.property === key && property.isTruthySelected)}
              className="m-1 ml-3"
            />
            <label htmlFor={key}>'{key}' is truthy</label>
            <br />
            <input
              type="checkbox"
              id={`${key}-false`}
              value={key}
              onChange={() => onChangeFilter({ property: key as any, isTruthySelected: false })}
              checked={properties.some(property => property.property === key && !property.isTruthySelected)}
              className="m-1 ml-3"
            />
            <label htmlFor={key}>'{key}' is falsey</label>
          </>
        )
      })}
    </div>
  )
}
