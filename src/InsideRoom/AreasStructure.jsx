import React from 'react';
import commonStyles from './Common.module.scss';
import Area from './Area';
import AddBed from './AddBed';

const AreasStructure = (props) => {

  const areasHTML = props.areas.map(area =>
    <div className={commonStyles.containerItem} key={area.id}>
      <Area area={area} showPatient={props.showPatient}/>
    </div>
  )

  return (
    <div className={commonStyles.container} >
      {areasHTML}
      {
        props.showPatient === null ?
        <AddBed  id={props.areas.length + 1}
        />
        : null
      }
    </div>
  );
}

export default AreasStructure;