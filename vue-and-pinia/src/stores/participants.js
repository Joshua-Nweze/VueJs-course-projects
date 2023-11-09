import { defineStore } from 'pinia'

export const useParticipantsStore = defineStore('participants', {
  state: () => ({
    participants: [
      {
        name: 'John Doe',
        age: 20,
        category: 'Art'
      },
      {
        name: 'John Doe',
        age: 20,
        category: 'Art'
      },
      {
        name: 'John Doe',
        age: 20,
        category: 'Science'
      }
    ],
    artParticipants: [],
    scienceParticipants: []
  }),

  actions: {
    addParticipant(data) {
      this.participants.unshift(data)
    },

    removeParticipant(index) {
      this.participants.splice(index, 1)

      this.sortParticipantsCategory()
    },

    async sortParticipantsCategory() {
      this.artParticipants = (this.participants).filter(participant => participant.category == 'Art')
      this.scienceParticipants = (this.participants).filter(participant => participant.category == 'Science')
    }
  }  
})
