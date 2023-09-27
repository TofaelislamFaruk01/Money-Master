console.log(87);

const bodyPart = document.getElementById('f-body');
console.log(bodyPart);
bodyPart.style.width = '60%';
bodyPart.style.textAlign = 'center';

const labels = document.getElementsByTagName('label');
console.log(labels);
for (label of labels)
{
    label.style.display = 'block';
}
const pGraphs = document.getElementsByTagName('p');
console.log(pGraphs);
for (pGraph of pGraphs)
{
    pGraph.style.fontWeight = 'bold';
}

const image = document.getElementById('image');
image.style.width = 'fitContent';
image.style.height = 'fitContent';

const dollar = document.getElementById('dollar');
dollar.style.color='rgb(171, 169, 49)';