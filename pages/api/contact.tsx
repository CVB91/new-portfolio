import { NextApiHandler } from 'next'
import { MongoClient, ObjectId } from 'mongodb'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    console.log(req.body)
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' })
      return
    }

    //store the data in a database

    interface NewMessage {
      id?: string | ObjectId
      email: string
      name: string
      message: string
    }

    const newMessage: NewMessage = {
      email,
      name,
      message,
    }

    let client: MongoClient

    let url = process.env.MONGO_URI!
    try {
      client = await MongoClient.connect(url)
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database', error })
      return
    }

    const db = client.db()

    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Storing message failed' })
      return
    }

    client.close()

    res.status(201).json({ message: 'Message sent successfully', newMessage })
    res.end()
  }
  
}

export default handler
