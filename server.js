const express = require('express')
const app = express()
const PORT = 8000

const bodyParts = {
    'neck':{
        'muscles':'platysma, suprahyoids(mylohyoid, digastric, geniohyoid, stylohyoid), infrahyoids(thyrohyoid, sternohyoid, omohyoid), sternocleidomastoid anterior, sternocleidomastoid lateral, scalenes anterior, scalenes middle, scalenes posterior, prevertebral muscles(longus colli, longus capitis, rectus capitis anterior rectus capitis lateralis), splenius capitis, splenius cervicis, suboccipital muscles(rectus capitis posterior major, rectus capitis posterior minor, rectus capitis post major and minor, obliquus capitis superios, obliquus capitis inferior)',
    },
    'back':{
        'muscles':'external intercostal, internal intercostal, subcostal, transversus thracis, diaphragm, serratus posterior superior, serratus posterior inferior, levatores costarum, quadratus lumborum, external oblique, internal oblique, transversus abdominis, erector spinae(illiocostalis cervicis, illiocostalis thoracis, illiocostalis lumborum, longissimus capitis, longissimus cervicis, longissimus thoracis, spinalis capitis, spinalis cervicis, spinalis thoracis), semispinalis capitis, semispinalis cervicis, semispinalis thoracis, multifidus cervical multifidus thoracic, multifidus lumbar, multifidus, sacral, rotatores cervical, rotatores thoracic, rotatores lumbar, interspinales cervical, interspinales upper and lower thoracic, interspinales lumbar, intertransversarrii cervial intertransversarrii lumbar, bulbospongiosus, ischiocavernosus, deep transverse perineal, superficial transverse perineal, external anal sphincter, levator ani, coccygues,  ',
    },
    'shoulder-arm':{
        'muscles':'trapezuis upper, trapezuis lower, trapezuis middle, levator scapula, rhomboids major, rhomboid minor, serratus anterior, pectoralis minor, subclavius, pectoralis major, latissiumus dorsi, supraspinatus, infraspinatus, teres minor, subscapularis, teres major, deltoids(anterior, middle posterior), coracobrachialis, biceps brachii, brachialis, triceps brachii, anconeus',
    },
    'upperleg-hip-knee':{
        'muscles':'sartorius, psoas major and iliacus, quadriceps femoris group(rectus femoris, vastus intermedius, vastus medialis, vastus lateralis), rectus femoris, pectineus, adductor longus, adductor brevis, adductor magnus, gracilis, gluteus maximus, gluteus medius, gluteus minimus, tensor of fascia lata, piriformis, gemellus superior, obturator internus, gemellus inferior, obturator externus, quadratus femoris, hamstrings(biceps femoris long head, biceps femoris short head, semitendinosus, semimembranosus)',
    },
    'ankle-foot':{
        'muscles':'tibialis anterior, extensor digitorum longus, extensor hallucis longus, fibularis tertius fibularis longus, fibularis brevis, gastrocnemius, soleus, tibialis posterior, flexor digitorum longus, flexor hallucis longus, plantaris and popliteus, extensor digitorum brevis, aductor hallucis, flexor digitorum brevis, abductor digiti miniumi, lumbricals, quadratus plantae, flexor hallucis brevis, adductor hallucis, flexor digiti minimi brevis, dorsal interossei, plantar interossei', 
    },
    'wrist-hand':{
        'muscles':'flexor carpi radialis, flexor carpi ulnaris, palmaris longus, pronator teres, pronator quadratus, flexor digitorum supericialis, flexor digitorum profundus, flexor pollicis longus, brachioradialis, extensor carpi radialis longus, extensor carpi radialis brevis, extensor carpi ulnaris, extensor digitorum, extensor digiti minimi, supinator, extensor indicis, abductor pollicis longus, extensor pollicis longus, extensor pollicis brevis, abductor pollicis brevis, adductor pollicis, flexor pollicis brevis, opponens ollicis, flexor digiti minimi brevis, opponens digiti minimi, abductor digiti minimi, lumbricals, palmar interosei, dorsal interossei ', 
    },
    'unknown':{
        'muscles':'unknown',
    },
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const bodyPartName = request.params.name.toLowerCase()
    if(bodyParts[bodyPartName]){
        response.json(bodyParts[bodyPartName])  
    }else{
        response.json(bodyParts['unknown'])
    }
})

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}! Better go catch it!`)
})