import { query, getDocs, collection, addDoc, doc, updateDoc, deleteDoc, orderBy, where } from "firebase/firestore";
import Db from "./firebase";

const CrudFunction = {
    fetchDataArray: async (tb) => {
        const q = query(
            collection(Db, tb),
            orderBy('createdAt', 'desc')
        );

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return data
    },

    fetchDataObject: async (tb, id) => {
        const q = query(
            collection(Db, tb),
            where("uid", "==", id)
        );

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const res = {};
        data.forEach(obj => {
            for (key in obj) {
                res[key] = obj[key];
            };
        });

        return res
    },

    addData: async (tb, data) => {
        return await addDoc(collection(Db, tb), data);
    },

    updateData: async (tb, id, data) => {
        const itemRef = doc(Db, tb, id);
        return await updateDoc(itemRef, data);
    },

    deleteData: async (tb, id) => {
        const itemRef = doc(Db, tb, id);
        return await deleteDoc(itemRef);
    },

    search: async (tb, field, keyword) => {
        const q = query(collection(Db, tb), where(field, '==', keyword));
        const snapshot = await getDocs(q);
        const results = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return results;
    }
}

export default CrudFunction