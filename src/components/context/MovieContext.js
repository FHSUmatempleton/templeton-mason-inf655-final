import { useState, createContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  addDoc,
  doc,
  getDocs,
  orderBy,
  query,
  limit,
  collection,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    //To fetch the Movie Data
    const fetchMovie = async () => {
      const movieListRef = collection(db, "movieList");
      const q = query(movieListRef, orderBy("title"), limit(10));
      const querySnapshot = await getDocs(q);
      const movieList = [];
      querySnapshot.forEach((doc) => {
        return movieList.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setMovieList(movieList);
      setIsLoading(false);
    };
    fetchMovie();
  }, [movieList]);

  //To favorite the Movie
  const favorite = async (newMovie) => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "movieList"), newMovie);
    console.log(newMovie);
    console.log("Document written with ID: ", docRef.id);
    setMovieList(movieList);
  };

  return (
    <MovieContext.Provider
      value={{
        movieList,
        isLoading,
        favorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;