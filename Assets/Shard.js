﻿#pragma strict

function Start () {
}

function Update () {
}

function OnTriggerEnter (other : Collider) {
	Destroy(transform.parent.gameObject);
}