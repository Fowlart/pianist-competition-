variable "my-access-key" {
  type = string
}

variable "my-secret-key" {
  type = string
}

provider "aws" {
  profile = "default"
  region  = "us-east-2"
  access_key = var.my-access-key
  secret_key = var.my-secret-key
}

resource "aws_s3_bucket" "fowlart-piano-rivne" {
  bucket = "fowlart-piano-rivne"
  acl    = "public-read"
  tags = {
    "Terraform" : "true"
  }
  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_object" "object1" {
  for_each = fileset("dist/", "*")
  bucket = aws_s3_bucket.fowlart-piano-rivne.id
  key = each.value
  source = "dist/${each.value}"
  content_type = "text/html"
  acl          = "public-read"
}


