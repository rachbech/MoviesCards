import {movies$} from '../utils/config';

export const getAllMovies = async () => {
  const movies = await movies$;
  return movies;
};

export const deleteMovie = async (id) => {
  const movies = await getAllMovies();
  for( var i = 0; i < movies.length; i++){ 
   if ( movies[i].id === id) {
     movies.splice(i, 1); 
   }
}

  return movies;
};

export const getAllCategorys = async (id) => {
  const movies = await getAllMovies();
  const categorys = movies.map((item)=>{
    return item.category
  })

  const uniqueCategorys = [...new Set(categorys)];

  return uniqueCategorys;
};

export const getMoviesByCategorys = async (categorys) => {
  const movies = await getAllMovies();
  var filtredCategorys = [];
  for(var i=0; i<movies.length; i++){
      if(categorys.includes(movies[i].category)){
         filtredCategorys.push(movies[i]);
      }
  }

  return filtredCategorys;
};





















// export const signin = async (username, password) => {
//   try {
//     const response =  await fetch(`${api._55}/signIn`, {
//       method: 'post',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         userName: username,
//         password: password,
//       }),
//     });

//     if (response.ok) {
//       const res = await response.json();
//       return res;
//     }
//     throw new Error('signinError');
//   } catch (e) {
//     if (e.message === 'signinError') {
//       throw new Error(e.message);
//     }
//     throw new Error('connectionError');
//   }
// };

// export const signup = async (data) => {
//   const response = await fetch(`${api._55}/signup`, {
//     method: 'post',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   if (response.status === 201) {
//     const res = await response.json();
//     return res;
//   }
//   throw Error('Signup Error!!');
// };


