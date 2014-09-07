#pragma strict

var rotationSpeed: float;

function Start () {

}

function Update () {
	transform.Rotate(Vector3.up * rotationSpeed * Time.deltaTime);
}