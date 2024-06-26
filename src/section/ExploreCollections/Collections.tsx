import CollectionsItems from './CollectionsItems';

const Collections = () => {
    return (
        <div>
            <CollectionsItems img={['./1.png','./2.png','./3.png','./4.png']} category={['Swimwear','Clothes','Sets','Accessories']} />
        </div>
    );
}

export default Collections;
