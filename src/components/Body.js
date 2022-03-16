import React from 'react'
import {Card} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

function Body() {
  return (
      <>
    <div style={{margin:'5%'}}>
    <Card fixed="right" style={{width: '30%', float:'right', margin:'2%'}}>
    <ListGroup variant="flush">
        <Button  variant="outline-secondary"><ListGroup.Item style={{margin:'0'}}>What Is a Blockchain?</ListGroup.Item></Button>
        <Button variant="outline-secondary"><ListGroup.Item>How Does a Blockchain Work?</ListGroup.Item></Button>
        <Button variant="outline-secondary"><ListGroup.Item>Blockchain Decentralization</ListGroup.Item></Button>
        <Button variant="outline-secondary"><ListGroup.Item>Transparency</ListGroup.Item></Button>
    </ListGroup>
    </Card>
    <Card style={{ width: '60%' }}>
        <Card.Body>
            <Card.Title>What Is a Blockchain?</Card.Title>
            
            <Card.Text>
            <p>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.</p>

            <p>One key difference between a typical database and a blockchain is how the data is structured. A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the blockchain. All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.</p>

            <p>A database usually structures its data into tables, whereas a blockchain, like its name implies, structures its data into chunks (blocks) that are strung together. This data structure inherently makes an irreversible time line of data when implemented in a decentralized nature. When a block is filled, it is set in stone and becomes a part of this time line. Each block in the chain is given an exact time stamp when it is added to the chain.</p>


            </Card.Text>
        </Card.Body>
    </Card>
    <Card style={{ width: '60%' }}>
        <Card.Body>
            <Card.Title>How Does a Blockchain Work?</Card.Title>
            
            <Card.Text>
            <p>The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. In this way, a blockchain is the foundation for immutable ledgers, or records of transactions that cannot be altered, deleted, or destroyed. This is why blockchains are also known as a distributed ledger technology (DLT).</p>

            <p>First proposed as a research project in 1991, the blockchain concept predated its first widespread application in use: Bitcoin, in 2009. In the years since, the use of blockchains has exploded via the creation of various cryptocurrencies, decentralized finance (DeFi) applications, non-fungible tokens (NFTs), and smart contracts.</p>


            </Card.Text>
        </Card.Body>
    </Card>
    <Card style={{ width: '60%' }}>
        <Card.Body>
            <Card.Title>What Is a Blockchain?</Card.Title>
            
            <Card.Text>
            <p>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.</p>

            <p>One key difference between a typical database and a blockchain is how the data is structured. A blockchain collects information together in groups, known as blocks, that hold sets of information. Blocks have certain storage capacities and, when filled, are closed and linked to the previously filled block, forming a chain of data known as the blockchain. All new information that follows that freshly added block is compiled into a newly formed block that will then also be added to the chain once filled.</p>

            <p>A database usually structures its data into tables, whereas a blockchain, like its name implies, structures its data into chunks (blocks) that are strung together. This data structure inherently makes an irreversible time line of data when implemented in a decentralized nature. When a block is filled, it is set in stone and becomes a part of this time line. Each block in the chain is given an exact time stamp when it is added to the chain.</p>


            </Card.Text>
        </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Body
