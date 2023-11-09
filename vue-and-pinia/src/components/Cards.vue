<script setup>
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useParticipantsStore } from '../stores/participants';

let participantsStore = useParticipantsStore()

let { participants, artParticipants, scienceParticipants } = storeToRefs(participantsStore)

participantsStore.sortParticipantsCategory()
</script>


<template>
    <div>
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col-12 col-md-4 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-8 fs-5">
                                    Number of Participants
                                </div>
                                <div class="col-4 fs-1">
                                    {{ participants.length }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-8 fs-5">
                                    Art Participants
                                </div>
                                <div class="col-4 fs-1">
                                    {{ artParticipants.length }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-8 fs-5">
                                    Science Participants
                                </div>
                                <div class="col-4 fs-1">
                                    {{ scienceParticipants.length }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>