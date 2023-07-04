# Rendu Arthur LUCAS NPMJS

## Installation

```npm
npm install iim-alucas-rendu2
```

## How to use ?

this example is based on a React app

```react
import myModule from 'iim-alucas-rendu2/src/index'

function ApiRequest(){

    const [festivals, setFestivals] = useState([]);

    myModule.getAllfestivals().then(data => {
        setFestivals(data);
    }).catch(error => {
        console.error('error')
    });

    console.log(festivals);
}
```

Here is a list of functions included by the module :
 - getAllRegions
 - getAllfestivals
 - filterFestivalsByQuery (take a string argument, to filter by department)
 - getFestivalSOrderByFieldASC
 - getFestivalSOrderByFieldDESC

