import { authenticate, unauthenticate, currentUser } from "@onflow/fcl";
import './config'
import { writable } from "svelte/store";
import { browser } from "$app/environment";

export async function getStarted() {
  authenticate();
}

export async function signOut() {
  unauthenticate();
}


export const user = writable({
  loggedIn: false,
  addr: null
});

if (browser) {
  currentUser.subscribe(user.set);  
}