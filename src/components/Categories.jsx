import React, { Component } from 'react'


// class Categories extends Component {
//  state = {
// activeItem : null,
// }
// selectItem = (index) => {
//    this.setState ({
//       activeItem: index,
//    })
// }

//    render () {
//       const {items, onClickItem} = this.props
//       return (
//          <div className="categories">
//               <ul>
//                   <li className="active">Все</li>
//                  {items.map((name, index)=><li className={this.state.activeItem===index ? 'active':''}
//                   onClick={()=> this.selectItem(index)} key={`${name}_${index}`}>{name}</li>)}
//                 </ul>
//               </div>
//       )
//    }
// }

const Categories = ({items, onClickItem}) => {
   return (
      <div className="categories">
      <ul>
        <li className="active">Все</li>
       {items.map((name, index)=><li onClick={()=>onClickItem(name)} key={`${name}_${index}`}>{name}</li>)}
      </ul>
    </div>
   )
}

 export default Categories;
