import {create} from 'zustand'
import {axiosInstance} from '../axios'
import {toast} from 'react-hot-toast'

export const userChatStore = create((set, get) => ({
    message: [],
    users: [],
    selectedUser: null,
    isUserLoading: false,
    isMessagesLoading: false,


    getUsers: async() => {
        set({isUserLoading: true})
        try {
            const user = await axiosInstance.get('/messages/users') 
            set({users: user.data })
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isUserLoading: false})
        }
    },

    getUserMessages: async(userId) => {
        set({isUserLoading: true})
        try {
            const userMessages = await axiosInstance.get(`/messages/${userId}`)
            set({messages: userMessages.data})
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isUserLoading: false})
        }
    },

    sendMessages: async(messageData) => {
        const {selectedUser, message} = get()
        try {
            const messageRes = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData)
            set({message: [...message, messageRes.data]})
        } catch (error) {
            toast.error(error.response.data.message)
        }
    },

    setSelectedUser: (selectedUser) => set({selectedUser})

}))