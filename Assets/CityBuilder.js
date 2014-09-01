#pragma strict

private var houseSize = 10;
private var area = 500;

function Start () {
	for (var i = -area; i < area; i += houseSize * 2) {
		for (var j = -area; j < area; j += houseSize * 2) {
			var cube : GameObject  = GameObject.CreatePrimitive(PrimitiveType.Cube);
			var height = (Random.value + 0.5) * 180;
			cube.transform.localScale = Vector3(houseSize, height, houseSize);
			cube.transform.position = Vector3(-i, height / 2, -j);
		}
	}
}

function Update () {

}