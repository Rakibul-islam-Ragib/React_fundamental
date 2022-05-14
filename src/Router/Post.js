
function Post({match}) {
const {params} = match ;
  return (
    <div>
        I love - {params.cat} / {params.topic}- Its big one......
    </div>
  )
}

export default Post