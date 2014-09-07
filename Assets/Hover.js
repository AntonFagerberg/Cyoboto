#pragma strict

private var y: float;
private var counter = 0.0;

function Start () {
	y = transform.position.y;
}

function Update () {
	counter += Time.deltaTime;
	transform.position.y = y + 0.2 * Mathf.Sin(counter);
}