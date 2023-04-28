import axios from "axios"
export const getAllPosts = async () =>{
    const res = await axios.get("http://localhost:5000/posts");
    if (res.status !== 200){
        return console.log("Some Error Occured");
    }

    const data = res.data;
    return data;

};

export const sendAuthRequest = async (signup, data) => {
    const res = await axios
    .post(`http://localhost:5000/user/${signup? "signup": "login"}`,{
        name: data.name ? data.name: "",
        email: data.email,
        password: data.password,
    })
    .catch((err)=> console.log(err));

    if (res.status !== 200 && res.status !== 201){
        return console.log("Unablde to Authenticate");
    }
    const resData = await res.data;
    return resData;
    ;
};

export const addPost = async (data) =>{
    const res = await axios.post(
        'http://localhost:5000/posts',{
        title: data.title,
        description: data.description,
        location: data.location,
        image: data.imageUrl,
        date: data.date,
        user: localStorage.getItem("userId"),
    })
    .catch((err) => console.log(err));

    if (res.status !== 201){
        return console.log("Error Occurred");
    }

    const resData = await res.data;
    return resData;
};

export const getPostDetails = async (id) =>{
    const res = await axios.get(`http://localhost:5000/posts/${id}`).catch((err) => console.log(err));
    if(res.status !== 200) {
        return console.log("Unable to fetch diary");
    }

    const resData = await res.data;
    return resData;


};

export const postUpdate = async (data,id) =>{
    const res=axios.put(`http://localhost:5000/posts/${id}`,{

        title: data.title,
        description: data.description,
        loctation:data.location,
        imageUrl: data.image,

    }).catch((err) => console.log(err));

    if (res.status !== 200 ){
        return console.log("Unablde to Update");
    }

    const resData = await res.data;
    return resData;

};

export const postDelete =async (id) =>{
   const res= await axios
    .delete(`http://localhost:5000/posts/${id}`)
    .catch((err)=> console.log(err));

    if (res.status !== 200 ){
        return console.log("Unablde to Delete");
    }

    const resData = await res.data;
    return resData;

};

export const getUserDetails =async () =>{
    const id = localStorage.getItem("userId");
    const res= await axios
    .get(`http://localhost:5000/user/${id}`)
    .catch((err)=> console.log(err));

    if (res.status !== 200 ){
        return console.log("Unablde to Delete");
    }


    const resData = await res.data;
    return resData;
};