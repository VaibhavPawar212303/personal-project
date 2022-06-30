export default{
    title:'Catogories',
    name : 'catogories',
    type : 'document',
    fields:[
    {
        title:'Name of the catogory',
        name:'catogoryName',
        type:'string'
    },
    {
       title:'Slug',
       name:'CatoSlug',
       type:'slug',
       options:{
        source: "catogoryName",
        maxLength:90
        }
    },
    {
        title:'Describe catogory',
        name:'DescCato',
        type:'array',
        of:
        [{
            type:'block'
        }]
    }
   ]
}