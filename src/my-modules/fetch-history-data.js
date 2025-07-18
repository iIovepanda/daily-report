//Cloud Firestoreから取得したデータを表示
export const fetchHistoryData = async (getDocs, collection, db) => {
    let tags = "";
    // reportsコレクションからデータを取得
    const querySnapshot = await getDocs(collection(db, "reports"));
    //データをテーブルの表の形式に合わせて表示
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id}, =>, ${doc.data()}`);
      tags += `<tr>
      <td>${doc.data().date}</td>
      <td>${doc.data().name}</td>
      <td>${doc.data().work}</td>
      <td>${doc.data().comment}</td>
      </tr>`;
    });
    document.getElementById("js-history").innerHTML = tags;
};