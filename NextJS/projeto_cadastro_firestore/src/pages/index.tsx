import Layout from '@/components/layout'
import Tabela from '@/components/tabela'
import Cliente from '@/core/Cliente'
import Botao from '@/components/botao'
import Formulario from '@/components/formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '@/core/clienteRepositorio'
import ColecaoCliente from '@/firebase/db/colecaoCliente'
import useClientes from '@/hooks/useClientes'

export default function Home() {


  const { selecionarCliente, excluirCliente, cliente, clientes , novoCliente, salvarCliente, tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useClientes()

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-ro-r from-blue-500 text-white to-purble-600 text-2xl
    `}>
      <Layout titulo="Cadastro Simples">
        { tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao
                cor='green'
                className='mb-4'
                onClick={() => novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente} />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={() => exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}

      </Layout>
    </div >
  )
}
