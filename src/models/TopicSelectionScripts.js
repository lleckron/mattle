import Topic from '@/models/Topic.js'

export function createTopics() {
    let usPresidents = new Topic("US Presidents","us-presidents")
    let chineseDynasties = new Topic("Chinese Dynasties","chinese-dynasties")
    let europeanMonarchs = new Topic("European Monarchs","european-monarchs")
    return[usPresidents,chineseDynasties,europeanMonarchs]
}