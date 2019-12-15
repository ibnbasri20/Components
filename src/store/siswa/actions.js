import fire from '../config'
export default {
    GET_SISWA: ({commit, state}, payload) => {
        let search = typeof payload != 'undefined' ? payload:''
        return new Promise((resolve, reject) => {
            fire.siswaCollection.limitToFirst(10)
        })
    },
    FIREBASE_ALGOLIA: ({}) => {
        const records = [];
        fire.siswaCollection.once('value', contacts => {
            contacts.forEach(contact => {
              const childKey = contact.key;
              const childData = contact.val();
              childData.objectID = childKey;
              records.push(childData);
            })
        }).then(() => {
            fire.index
            .saveObjects(records)
            .then(() => {
              console.log('Contacts imported into Algolia');
            })
            .catch(error => {
              console.error('Error when importing contact into Algolia', error);
              process.exit(1);
            });
        })
    },
    ADD_SISWA: ({commit, state}) => {
        fire.db.ref('/siswa').push({
            ...state.FORM_SISWA
        }).then(function(res) {
            const record = state.FORM_SISWA;
            record.objectID = res.key;
            fire.index.saveObject(record)
            .then(() => {
              console.log('Firebase object indexed in Algolia', record.objectID);
            })
            .catch(error => {
              console.error('Error when indexing contact into Algolia', error);
            });        
        })
    },
    DELETE_SISWA: ({}, objectID) => {
        fire.index
        .deleteObject(objectID)
        .then(() => {
        })
        .catch(error => {
          console.error('Error when deleting contact from Algolia', error);
        });    
    }
}