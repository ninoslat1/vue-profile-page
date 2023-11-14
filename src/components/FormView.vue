<template>
  <div ref="root">
    <button class="text-white font-bold hover:text-lime-400 duration-150" @click="state.openForm = true">Complaint</button>
    <teleport to="body">
      <div class="form" v-if="state.openForm">
          <div>
            <form @submit.prevent="handleSubmit" name="submit-to-google-sheet">
                  <p class="font-qs font-bold text-center"><span class="text-lime-600">Complaint Form</span></p>
                  <label>Name</label>
                  <input type="text" name="data[name]" placeholder="Input your name" required v-model="name">
              
                  <label>Email</label>
                  <input type="email" name="data[email]" placeholder="Input your mail" required v-model="email">
              
                  <label>Address</label>
                  <input type="text" name="data[address]" placeholder="Input your address" required v-model="address"/>
              
                  <label>Complaint Type</label>
                  <select name="data[complaintType]" v-model="complaintType">
                      <option value="Public">Public</option>
                      <option value="Privacy">Privacy</option>
                  </select>
                  <div v-if="complaintTypeError" id="error">{{ complaintTypeError }}</div>
              
                  <label>Complaint<span class="text-xs px-2.5 text-gray-600">Press <kbd class="kbd kbd-sm">,</kbd> to add complaint.</span></label>
                  <input name="data[complaints]" type="text" v-model="tempComplaint" @keyup.prevent="addComplaint"/>
                  <div v-for="complaint in complaints" :key="complaint" id="pill">
                      <span @click="deleteComplaint(complaint)"> {{ complaint }} </span>
                  </div>
                  <div v-if="complaintsError" id="error">{{ complaintsError }}</div>
              
                  <div>
                      <input type="checkbox" v-model="terms"/>
                      <label class="items-center">Accept Terms and Condition <span><kbd class="tooltip tooltip-left before:w-[15rem] before:content-[attr(data-tip)] kbd kbd-sm" data-tip="By pressing the 'Send Complaint' button, I declare that the data I submit is genuine and accurate. I take full responsibility for the truthfulness and authenticity of the data I provide. I give permission to the local authority to store the data I submit in their database, with use in accordance with applicable regulations and privacy policies.">?</kbd></span></label>
                  </div>
                  <div v-if="termsError" id="error">{{ termsError }}</div>
              
                  <div class="flex justify-between items-center font-bold">
                      <button class="m-2.5 bg-lime-600 text-sm text-[white] p-2.5 rounded-md border-0 text-center" type="submit">Send Complaint</button>
                      <button class="m-2.5 bg-sky-400 text-sm text-[white] p-2.5 rounded-md border-0" @click="state.openForm = false">Close Form</button>
                  </div>
                </form>
          </div>
      </div>
    </teleport>   
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    setup(){
      const state = reactive({openForm: false})
      return {
        state,
      }
    },
    data() {
          return {
              name: '',
              email: '',
              address: '',
              complaintType: '',
              terms: false,
              tempComplaint: '',
              complaints: [],
              complaintTypeError: '',
              complaintsError: '',
              termsError: '',
              endpoint: process.env.VUE_APP_FORMCARRY_ENDPOINT
          }
      },
      methods: {
        addComplaint(e) {
          if(e.key === "," && this.tempComplaint){
            if(!this.complaints.includes(this.tempComplaint)){
              this.complaints.push(this.tempComplaint.replace(',',''))
            }
            this.tempComplaint = ''
          }
        },
        deleteComplaint(complaint) {
          this.complaints = this.complaints.filter((item) => {
            return complaint !== item
          })
        },
        async handleSubmit() {
          this.complaintType === '' ? this.complaintTypeError = "Must have a complaint type" : this.complaintTypeError = ''
          this.complaints.length === 0 ? this.complaintsError = "Must have a complaint" : this.complaintsError = ''
          this.terms === false ? this.termsError = "Please accept the terms" : this.termsError = ''
          
          if(!this.complaintsError && !this.complaintTypeError && !this.termsError){
            const data = {
              email: this.email,
              name: this.name,
              address: this.address,
              complaintType: this.complaintType,
              complaints: this.complaints
            }
            try {
              const response = await fetch(this.endpoint, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
                body: JSON.stringify(data),
              });
              const result = await response.json();
              if (result.code === 200) {
                alert('Complaints submitted')
                this.name = ''
                this.email = ''
                this.address = ''
                this.complaintType= ''
                this.tempComplaint = ''
                this.complaints = ''
                this.terms = false
              } else {
                this.error = result.message;
              }
            }catch(err) {
              this.error = err.message;
            }
          }
        }
      }
}
</script>

<style lang="postcss" scoped>
    .form {
        @apply absolute w-full top-0 left-0 bg-black bg-opacity-50 h-full px-[5vw] lg:px-[25vw]
    }
    form {
        @apply max-w-[500px] text-left mx-auto my-[30px] px-5 lg:p-10 rounded-[10px] bg-white;
      }
      label {
        @apply text-slate-900 inline-block text-sm md:text-lg tracking-[1px] font-bold lg:my-[2.5vh] mx-0 font-qs;
      }
      input,
      select {
        @apply block w-full box-border text-[#555] px-1.5 py-2.5 border-b-[#ddd] border-[none] border-b border-solid font-inter;
      }
      input[type="checkbox"] {
        @apply inline-block w-4 my-0 mx-2.5 relative
      }
      #pill {
        @apply inline-block bg-[#eee] text-xs tracking-[1px] font-[bold] text-[#777] cursor-pointer ml-0 mr-2.5 my-5 mb-0 px-3 py-1.5 rounded-md;
      }
      #error {
        @apply text-[#ff0062] text-lg font-[bold] my-2.5;
      }
</style>