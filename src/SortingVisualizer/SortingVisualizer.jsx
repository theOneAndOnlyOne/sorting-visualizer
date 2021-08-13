import React from 'react'
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {getBubbleSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {getQuickSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import {getHeapSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css'

// Change this value for the speed of the animations.
let ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
let NUMBER_OF_ARRAY_BARS =100;

// This is the main color of the array bars.
const PRIMARY_COLOR = '#66FCF1';


// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() { // This will run everytime page is loaded
        this.resetArray();
    }

    resetArray() {

        const array = []; // create array
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {

            array.push(radomIntFromInterval(1,800)); // push random value between 5 - 1000

        }
        this.setState({array});

    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
        }
    }

    quickSort() {

        const animations = getQuickSortAnimations(this.state.array);
        //console.log("Animation Order");
        //console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }


    }

    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        //console.log("Animation Order");
        //console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    bubbleSort() {
        /* Code to check if sort checks out
        for(var i = 0; i < 1000; i++)
        {
            const unsortedArray = this.state.array.slice();
            //console.log(unsortedArray);
            const sortedArr = unsortedArray.sort();
            //console.log(sortedArr);
            const sortedArrBubble = bubbleSort(unsortedArray);
            //console.log(unsortedArray);
            console.log(arraysAreEqual(sortedArr, sortedArrBubble));
            this.resetArray();
        } */
        const animations = getBubbleSortAnimations(this.state.array);
        //console.log("Animation Order");
        //console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }



    }

    sliderArrayUpdate() {

        var slider = document.getElementById("arrayRange");
        var currentBarValue = slider.value;
        NUMBER_OF_ARRAY_BARS = currentBarValue;
        //console.log(currentBarValue);
        this.resetArray();

    }

    sliderSpeedUpdate() {

        var slider = document.getElementById("speedRange");
        var currentSpeedValue = slider.value;
        ANIMATION_SPEED_MS = currentSpeedValue;
        //console.log(currentSpeedValue);
        this.resetArray();

    }

    
    render() {

        const {array} = this.state;

        return (
            
            <div class="array-container">
                <head>
                <script src="https://kit.fontawesome.com/e881289764.js" crossorigin="anonymous"></script>
                </head>
                <div class = "nav-bar">
                    <ul>
                        
                        <li><a class = "button1 reset" onClick={() => this.resetArray()}>Generate New Array</a></li>
                        <div class = "sorting-buttons">
                            <li><a class = "button1" onClick={() => this.mergeSort()}>Merge Sort</a></li>
                            <li><a class = "button1" onClick={() => this.quickSort()}>Quick Sort</a></li>
                            <li><a class = "button1" onClick={() => this.heapSort()}>Heap Sort</a></li>
                            <li><a class = "button1" onClick={() => this.bubbleSort()}>Bubble Sort</a></li>
                        </div>
                        <li><input class="slidecontainer" onClick={() => this.sliderArrayUpdate()} type="range" min="5" max="100" class="slider" id="arrayRange"></input></li>
                        <li><input class="slidecontainer" onClick={() => this.sliderSpeedUpdate()} type="range" min="1" max="100" class="slider" id="speedRange"></input></li>
                    </ul>

                    
                </div>
            
                {array.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`}}></div>
                ))}

                <section id="footer">
                    <h3>Sorting Algorithm Visualizer</h3>
                    <a href = "https://theoneandonlyone.github.io/"><h4>By: Joshua Gonzales</h4></a>
                </section>

            </div> 
        );
    }
}

function radomIntFromInterval(min, max) {

    return Math.floor(Math.random() * (max -min +1) + min);

} 

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }

