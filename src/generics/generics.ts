interface IFooBar {
  foo: string,
  bar: string
}

const fooBars: Array<IFooBar> = [
  {
    foo: "foo1",
    bar: "bar1"
  }, {
    foo: "i am foo two",
    bar: "i am bar two"
  },
  {
    foo: "foo three",
    bar: "bar three"
  },
]

function sortByFoo(fooBars: Array<IFooBar>) {
  fooBars.sort((a, b) => {
    if (a.foo > b.foo) {
      return 1
    }
    if (a.foo < b.foo) {
      return -1
    }
    return 0
  })
}





