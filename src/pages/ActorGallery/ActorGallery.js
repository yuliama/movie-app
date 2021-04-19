import { useState } from "react"
import ActorModel from "../../model/ActorModel";
import ActorCard from "../../components/ActorCard/ActorCard";
import Search from "../../components/Search/Search";
import './ActorGallery.css';

function ActorGallery() {
    const [actors, setActor] = useState([
        new ActorModel(1, "Bryan", "Cranston", "1956-3-7", "https://m.media-amazon.com/images/M/MV5BMTA2NjEyMTY4MTVeQTJeQWpwZ15BbWU3MDQ5NDAzNDc@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0186505/?ref_=tt_cl_t1"),
        new ActorModel(2, "Aaron", "Paul", "1979-8-27", "https://m.media-amazon.com/images/M/MV5BMTY1OTY5NjI5NV5BMl5BanBnXkFtZTcwODA4MjM0OA@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0666739/?ref_=tt_cl_t3"),
        new ActorModel(3, "Anna", "Gunn", "1968-8-11", "https://m.media-amazon.com/images/M/MV5BMTU0NTk3MDQ3OV5BMl5BanBnXkFtZTcwNDY3NzQ4Mg@@._V1_UY317_CR4,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0348152/?ref_=tt_cl_t2"),
        new ActorModel(4, "Bob", "Odenkirk", "1962-10-22", "https://m.media-amazon.com/images/M/MV5BOWM5MDJjYTItMTRkNC00NTQ4LThkNjUtNDY3Mzk0YWMwMTBhXkEyXkFqcGdeQXVyNzQzNDYwMA@@._V1_UY317_CR18,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0644022/?ref_=tt_cl_t7")
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const cards = actors.map(actor =>
        <ActorCard id={actor.id} actor={actor}></ActorCard>);
    return (
        <div className="container">
            <Search onChange={setSearchTerm}></Search>
            <div className="gallery">{cards}</div>
        </div>
    )
}

export default ActorGallery;