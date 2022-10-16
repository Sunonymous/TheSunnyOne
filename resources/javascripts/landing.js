"use strict";

const log = (v) => console.info(v);
const isBetween = (n, low, high) => n >= low && n <= high;
const BIRTHDAY = 132;
const BIRTH_YEAR = 1993;

function dayOfYear() {
  const oneDay = 1000 * 60 * 60 * 24;
  const now = new Date();
  const yearStart = new Date(now.getFullYear(), 0, 0);
  const difference =
    now -
    yearStart +
    (yearStart.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(difference / oneDay);
}

function sunnyAge() {
  const now = new Date();
  const year = now.getFullYear();
  const birthYear = dayOfYear() >= BIRTHDAY ? BIRTH_YEAR : BIRTH_YEAR - 1;
  return year - birthYear;
}

function uponDOM() {
  // Elements
  const greeting = document.querySelector("#greeting");
  const dynRefs = document.querySelectorAll("[data-ref]");
  // Functions
  const updateReference = (elem) => (elem.textContent = dataRefs[elem.dataset.ref]);
  function updateGreeting(loud=false) {
    const now = new Date();
    const hour = now.getHours();
    let tod = 'time';
    if (hour === 0) {
      tod = 'midnight';
    } else if (isBetween(hour, 18, 23) || isBetween(hour, 0, 4)) {
      tod = 'evening';
    } else if (isBetween(hour, 5, 11)) {
      tod = 'morning';
    } else if (hour === 12) {
      tod = 'day';
    } else if (isBetween(hour, 13, 17)) {
      tod = 'afternoon';
    } else {
      tod = 'sometime';
    }
    const symbol = loud ? '!' : '.';
    greeting.textContent = `Good ${tod}${symbol}`;
  }

  // State
  const state = {
    entryTime: new Date().getHours(),
  };
  // Data
  const dataRefs = {
    ageInYears: sunnyAge(),
    countriesVisited: [
      "USA",
      "UK",
      "Scotland",
      "France",
      "Netherlands",
      "Mexico",
      "Belize",
      "Costa Rica",
      "Canada",
    ].length,
    statesVisited: [
      "Idaho",
      "Oregon",
      "Washington",
      "Utah",
      "Nevada",
      "California",
      "Colorado",
      "Texas",
      "Arizona",
    ].length,
  };
  // Change Greeting
  document.querySelector('#grayMe').addEventListener('mouseover', updateGreeting.bind(this, true));
  document.querySelector('#grayMe').addEventListener('mouseleave', updateGreeting.bind(this, false));
  updateGreeting();
  // Page Load
  dynRefs.forEach((em) => updateReference(em));
  // Jump to Bottom Change Text
  document.querySelector('#shortOnTime').onclick = () => document.querySelector('#zoomText').classList.remove('hidden');
  document.querySelector('#jumpToTop').onclick = () => document.querySelector('#zoomText').classList.add('hidden');
  // Email Button
  document.querySelector('#emailBtn').addEventListener('contextmenu', (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('embodiedsunshine@gmail.com').then(() => {
      alert('My email has been copied to your clipboard!');
    }).catch((err) => alert('We tried to copy the email, boss, and something went wrong!'));
  });
}

document.addEventListener("DOMContentLoaded", uponDOM);
