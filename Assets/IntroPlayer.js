#pragma strict

private var startPosition: Vector3;

function Start () {
	startPosition = transform.position;
}

function Update () {
	if (transform.position.y <= 250) {
		transform.position = startPosition;
		transform.rotation = Quaternion.identity;
	}
}