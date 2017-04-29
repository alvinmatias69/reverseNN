(function() {

'use strict';

function euclidean(point1, point2) {
	return Math.sqrt( Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2) )
}

function nearest(origin, objects) {
	let min = 9999,
		objectsCount = objects.length,
		currentDistance,
		nearestObject
	for (var i = 0; i < objectsCount; i++) {
		currentDistance = euclidean(origin, objects[i])
		if (min > currentDistance) {
			nearestObject = objects[i]
			min = currentDistance
		}
	}
	return nearestObject
}

function findNearest(objects){
	let allDistance = [],
		curObjects
	let objectsCount = objects.length
	for (var i = 0; i < objectsCount; i++) {
		let curCouple = {
			origin: {},
			nearest: {}
		}
		curCouple.origin = objects[i]
		curObjects = objects.slice()
		curObjects.splice(objects.indexOf(objects[i]), 1)
		curCouple.nearest = nearest(objects[i], curObjects)
		allDistance.push(curCouple)
	}
	return allDistance
}

function main(facillity, objects) {
	let allObjects = objects
	allObjects.push(facillity)	

	let nearest = findNearest(allObjects),
		nearestLength = nearest.length,
		reverseNN = []

	for (var i = 0; i < nearestLength; i++) {
		if (nearest[i].nearest == facillity) {
			reverseNN.push(nearest[i].origin)
		}
	}

	console.log(reverseNN)
}

//objects of querying
let objects = [
	{
		name: 'A',
		x: 2.5,
		y: 1.5
	}, 
	{
		name: 'B',
		x: 3.5,
		y: 4.5
	}, 
	{
		name: 'C',
		x: 2,
		y: 1
	}, 
	{
		name: 'D',
		x: 1,
		y: 1
	}, 
];

//reverse NN object
let facillity = {
	name: 'X',
	x: 1,
	y: 1

}

main(facillity, objects)

})();