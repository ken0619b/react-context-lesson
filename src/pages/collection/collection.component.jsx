import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import CollectionsContext from '../../contexts/collections/collections.context';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext)
  const collection = collections[match.params.collectionId]
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


export default CollectionPage;

// Context APIの使い方は以下の2通りある

// #1 
// const CollectionPage = ({ match }) => {
//   return (
//     <CollectionsContext.Consumer>
//       {(collections) => {
//         const collection = collections[match.params.collectionId];
//         const { title, items } = collection;
//         return (
//           <div className="collection-page">
//             <h2 className="title">{title}</h2>
//             <div className="items">
//               {items.map((item) => (
//                 <CollectionItem key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         );
//       }}
//     </CollectionsContext.Consumer>
//   );
// };


// #2
// const CollectionPage = ({ match }) => {
//   const collections = useContext(CollectionsContext)
//   const collection = collections[match.params.collectionId]
//   const { title, items } = collection;
//   return (
//     <div className='collection-page'>
//       <h2 className='title'>{title}</h2>
//       <div className='items'>
//         {items.map(item => (
//           <CollectionItem key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };