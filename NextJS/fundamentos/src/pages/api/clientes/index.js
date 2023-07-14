export default function handler(req, res){

    if (req.method === 'GET'){
        handleGet(req,res)
    }else{
        res.status(405).send('Erro ao enviar requisição')
    }

    //res.status(200).send('Envio de requisição')
    //res.status(200).json({name: 'Gabriel', id: 5})
}


function handleGet(req, res){
    res.status(200).json({name: 'Gabriel', id: 5})
}   