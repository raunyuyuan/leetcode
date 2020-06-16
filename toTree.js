const obj = [
  {id: 3, parent: 2},
  {id: 1, parent: null},
  {id: 2, parent: 1}
]

function toTree() {
  const o = {
    obj: {

    }
  }
  let rootIdx = 0
  this.some((element, idx) => {
    if (element.parent === null) {
      o.obj = {
        id: element.id,
        parent: null
      }
      rootIdx = idx
      return true
    }
  });
  const remainLen = this.length - 1;
  let i = 0;
  let prev = o.obj;
  while(i < remainLen) {
    this.some(item => {
      if (prev.id === item.parent) {
        prev.child = { ...item }
        prev = prev.child
        i++
        return true
      }
    })
      
  }
  return o
}


toTree.call(obj)
