export default function code(req, res){
    res.status(200).json({
        id: req.query.codigo,
        nome: `Gabriel ${req.query.codigo}`
    })
}