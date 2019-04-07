const types = ['TRY', 'SUCCESS', 'FAILURE']

export default function createAsynRequestTypes(val) {
	return types.reduce((acc, next) => {
  	acc = {
      	...acc,
        [next]: `${val}.${next}`
      }
      
    return acc
  }, {})
}
