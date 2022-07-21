import React, { useState } from 'react';

const Comment = () => {
    //Hooks
    const [commentaire, setCommentaire] = useState();
    const [nom, setNom] = useState();
    const [adresse, setAdresse] = useState();
    const [webs, setWebs] = useState();

    const handleChangeComment =(e) =>{
        setCommentaire(e.target.value);
    }

    const handleChangeNom = (e) =>{
        setNom(e.target.value);
    }

    const handleChangeAdresse =(e) =>{
        setAdresse(e.target.value);
    }

    const handleChangeWebs =(e)=>{
        setWebs(e.target.value)
    }

    const submitForm = (e) =>{
        e.preventDefault();
        console.log('Enter Pressed');
    }

    console.log("Commentaire saisi:" + commentaire + "\nNom saisi:" + nom + "\nAdresse saisie:" + adresse + "\nSite saisi:" + webs); 


    return (
        <div className="comment-in">
        <form action="rigolazNode.js" method="post" onSubmit={submitForm}>
                <label htmlFor="comment"><h3>Laissez un commentaire ici</h3></label><br />
                <textarea id="comment" value={commentaire} onChange={handleChangeComment} name="comment" maxLength="65525" required="required"></textarea>
                <label htmlFor="author">Nom <span className="required">*</span></label><br />
                <input type="text" id="author" name="author" value={nom} onChange={handleChangeNom} size="30" maxLength="245" required="required"/><br />
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" id="email" name="email" value={adresse} onChange={handleChangeAdresse} size="30" maxLength="100" aria-describedby="email-notes" required="required"/>
                <label htmlFor="url">Site web</label>
                <input type="text" id="url" name="url" value={webs} onChange={handleChangeWebs} size="30" maxLength="200"/><br />
                <input type="checkbox" id="comment-cookies-consent" name="cookies-consent" value="yes"/>
                <label htmlFor="comment-cookies-consent"> Mémoriser mes coordonnées!</label><br />
                <input type="checkbox" name="cookies-consent" id='getinfo' value="1"/>
                <label htmlFor="getinfo"> Avoir les infos de ETRALIS</label><br />
                <input type="submit" name="submit" id="submit" className="submit" value="Poster"/>
        </form>
    </div>
    );
};

export default Comment;