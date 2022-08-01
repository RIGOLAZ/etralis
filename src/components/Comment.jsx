import React, { useState, useEffect } from 'react';
import {db} from '../firebase/config';
import {collection, getDocs, addDoc} from 'firebase/firestore';
import Swal from 'sweetalert2';


const Comment = () => {
    //Hooks
    const [comments, setComments] = useState([]);
    const commentsCollectionRef = collection(db, 'comments');
    useEffect(()=> {
        const getComments = async()=>{
            const data = await getDocs(commentsCollectionRef);
            setComments(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getComments();
    });

    const [commentaire, setCommentaire] = useState();
    const [adresse, setAdresse] = useState();
    const [nom, setNom] = useState();
    const [webs, setWebs] = useState();

    const handleChangeComment =(e) =>{
        setCommentaire(e.target.value);
    };
    const handleChangeAdresse =(e) =>{
        setAdresse(e.target.value);
    };
    const handleChangeNom = (e) =>{
        setNom(e.target.value);
    };
    const handleChangeWebs =(e)=>{
        setWebs(e.target.value)
    };
    const submitForm = async(e) =>{
        e.preventDefault();
        await addDoc(commentsCollectionRef, {comment: commentaire, email:adresse, name: nom, website: webs})
        .then(()=>{
            setCommentaire('');
            setAdresse('');
            setNom('');
            setWebs('');
        }).then(()=>{
           /*  Swal.fire({
                // position: 'top-end',
                // icon: 'success',
                // title: 'Merci pour votre commnentaire',
                // showConfirmButton: false,
                // timer: 1500
              }) */

              Swal.fire({
                title: 'ETRALIS',
                text: 'Merci pour votre commentaire',
                imageUrl: 'https://res.cloudinary.com/do8lyndou/image/upload/v1652787741/official-logo-ets_ivl0ag.svg',
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: 'Custom image',
                timer: 2500
              })
        });
    }
    // console.log("Commentaire saisi:" + commentaire + "\nNom saisi:" + nom + "\nAdresse saisie:" + adresse + "\nSite saisi:" + webs); 
    return (
        <>
        <div className="comment-in">
            <form action="rigolazNode.js" method="post" onSubmit={submitForm}>
                <label htmlFor="comment"><h3>Laissez un commentaire ici</h3></label><br />
                <textarea id="comment" value={commentaire} onChange={handleChangeComment} name="comment" maxLength="65525" required="required"></textarea>
                <label htmlFor="author">Nom <span className="required">*</span></label><br />
                <input type="text" id="author" name="author" value={nom} onChange={handleChangeNom} size="30" maxLength="245" required="required"/><br />
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" id="email" name="email" value={adresse} onChange={handleChangeAdresse} size="30" maxLength="100" aria-describedby="email-notes" required="required"/>
                <label htmlFor="url">Site web</label>
                <input type="text" id="url" name="url" value={webs} onChange={handleChangeWebs} size="30" maxLength="200"/><br /><br />
                <input type="checkbox" id="comment-cookies-consent" name="cookies-consent" value="yes"/>
                <label htmlFor="comment-cookies-consent"> Mémoriser mes coordonnées!</label><br />
                <input type="checkbox" name="cookies-consent" id='getinfo' value="1"/>
                <label htmlFor="getinfo"> Avoir les infos de ETRALIS</label><br />
                <button id="submit" className="submit" value="Poster">ENVOYER</button>
            </form>
        </div>
            {/* <div className='App'>{comments.map((user)=>{
                return(
                    <div className='article'>
                        {''}
                        <p>Comment: {user.comment}</p>
                        <p>Email: {user.email}</p>
                        <p>Name: {user.name}</p>
                        <p>Website: {user.website}</p>
                    </div>
                );
            })}
        </div> */}
        </>
    );
};

export default Comment;