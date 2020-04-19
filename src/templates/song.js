import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Song = ({ data }) => {
    const post = data.nodeSong;

    return (
        <Layout>
            <h1>{post.field_title}</h1>
            <img
                src={post.relationships.field_cover_art.localFile.publicURL}
                alt={post.field_cover_art.alt}
            />
            <br />
            <audio controls>
                <source src={post.relationships.field_audio_file.localFile.publicURL} />
            </audio>
        </Layout>
    );
};

Song.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
    query($SongId: String!) {
        nodeSong(id: { eq: $SongId }) {
            id
            title
            field_title
            field_cover_art {
                alt
            }
            relationships {
                field_audio_file {
                localFile {
                    publicURL
                }
                }
                field_cover_art {
                localFile {
                    publicURL
                }
                }
            }
        }
    }
`;

export default Song;