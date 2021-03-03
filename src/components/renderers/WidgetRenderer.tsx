import React from 'react'
import Moment from 'react-moment';
import IWidget from '../../interfaces/IWidget';

export function WidgetRenderer(props: IWidget) {

  const { isSpecialCard, title, description, rating, created, updated, id } = props

  return (
    <div className="col-12 p-3">
      <div className={isSpecialCard ? "card specialCard" : "card"}>
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-text">{description}</div>
          <div className="card-text font-italic">Rating: {rating}/10</div>
        </div>
        <div className="card-footer text-muted text-right">
          <span className="float-left">#{id}</span>
          created: &nbsp;<Moment fromNow date={created} />&nbsp;
          updated: &nbsp;<Moment fromNow date={updated} />
        </div>
      </div>
    </div>
  )
}

