import React, {Component} from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import "../style/style.css"

class SongList extends Component{
    renderSongs(){
        if(this.props.data.loading){
            return <div>Loading...</div>
        }
        else{
            return this.props.data.songs.map(song => {
                return (
                    <li key={song.id} className="collection-item">
                        {song.title}
                    </li>
                )
            })
        }
    }
    render() {
        console.log("Props in SongList", this.props);
        return (
            <div>
                {this.renderSongs()}
            </div>
        )
    }
}

const query = gql`
{
    songs{
        id,
        title
    }
}
`
export default graphql(query)(SongList)