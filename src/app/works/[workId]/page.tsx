
import Layout from "../../../components/article"
type WorkProps = {
    workId:number|null
    
}
export default function Work({params}:{params:WorkProps}) {
return (<>
<Layout title="Work Details">
{params.workId}
</Layout>
</>)
}

