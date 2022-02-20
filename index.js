function turnIntoAnArray(collection) {
    return Object.values(collection)
}

function myEach(collection, callback) {

    for (let accesor in collection) {
        callback(collection[accesor]);
      }

    return collection
}

function myMap(collection, callback) {

    const newArray=[]

    for (let accesor in collection) {
        newArray.push(callback(collection[accesor]))
    }

    return newArray
}

function myReduce(collection, callback, acc) {
   let newArray
    
    if (Array.isArray(collection)) {
        console.log(collection)
        newArray = [...collection]
    } else {
        newArray = turnIntoAnArray(collection)
        
    }
    
    if (!acc) {
        acc = newArray[0]
        console.log(acc)
        newArray.shift()
    }
    for(let i = 0; i < newArray.length; i++) {
        //   let a = collection[a]
        //   acc += a
        console.log(acc, newArray[i], newArray)
        acc = callback(acc, newArray[i], newArray)
        }
        return acc 
      
}

function myFind(collection, predicate) {
    

    for (let accessor in collection) {
        let element = collection[accessor]
        if (predicate(element)) {
        return element
      }
    }
}

function myFilter(collection, predicate) {
    const truthyArray = []

    for (let accessor in collection) {
        let element = collection[accessor]
        if (predicate(element)) {
            truthyArray.push(element)
            
        }  

    }
    return truthyArray
}

function mySize(collection) {
    return Object.keys(collection).length
}

function myFirst(collection, n = 1) {
    let count = 1
  const selectedArray = []
  for (let accessor in collection) {
      if (count <= n) {
          selectedArray.push(collection[accessor])
          count++
      }
    
  }
  return selectedArray.length > 1 ? selectedArray : selectedArray[0]
}

function myLast(collection, n=1) {
    let startingIndex = collection.length -n

    return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex]
}

function myKeys(object) {
    let newArray = []
    for (const key in object) {
      newArray.push(key)
      // console.log(newArray)
    }
     return newArray
}

function myValues(object) {

    let newArray = []

  for (const property in object) {
    newArray.push(object[property])
    // console.log(newArray)
  }
  return newArray
}