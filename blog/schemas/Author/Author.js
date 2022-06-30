export default{
    title:'Author',
    name : 'author',
    type : 'document',
    fields:[
    {
        title:'Name of the Author',
        name:'author',
        type:'string'
    },
    {
       title:'Slug',
       name:'AuthSlug',
       type:'slug',
       options:{
        source: "author",
        maxLength:90
        }
    },
    {
        title:'Image of the Author',
        name:'AuthImage',
        type:'image',
        options:{
            hotspot:true
        }
    },
    {
        title:'Bio',
        name:'Authorinfo',
        type:'array',
        of:
        [{
            type:'block'
        }]
    }
   ]
}