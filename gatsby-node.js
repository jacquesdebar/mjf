/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const songs = await graphql(`
      {
        allNodeSong {
          nodes {
            id
            title
          }
        }
      }
    `)
    
    songs.data.allNodeSong.nodes.map(songData =>
        createPage({
            path: `/songs/${songData.id}`,
            component: path.resolve('src/templates/song.js'),
            context: {
                SongId: songData.id,
            }
        })    
    )
}