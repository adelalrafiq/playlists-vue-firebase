import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


// declare the connection & refs inside the function
// because the collection state is not global (like a user)
// different collections may be used at once this way
const useCollection = (collection) => {

  const error = ref(null)
  const isPending = ref(false)

  // add a new document
  const addDoc = async (doc) => {
    error.value = null
    isPending.value = true

    try {
      const res = await projectFirestore.collection(collection).add(doc)
      isPending.value = false
      return res
    }
    catch (err) {
      // console.log(err.message)
      error.value = 'could not send the message'
      isPending.value = false
    }
  }

  return { error, addDoc, isPending }

}

export default useCollection
